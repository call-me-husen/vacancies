import Layout from "@/components/common/Layout";
import { IJob, setData } from "@/redux/reducers/job";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
  VStack,
  Text,
  Textarea,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useStoreDispatch, useStoreState } from "@/redux/store";
import { useRouter } from "next/router";

export default function JobAddScreens(): JSX.Element {
  const [formData, setFormData] = useState<IJob>({
    jobVacancyCode: "",
    positionName: "",
    corporateId: "",
    corporateName: "",
    status: "",
    descriptions: "",
    corporateLogo: "",
    applied: false,
    workModel: { id: "", text: "" },
    salaryFrom: 0,
    salaryTo: 0,
    postedDate: "",
  });

  const onChangeForm = (key: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onChangeWorkModel = (value: string) => {
    const splitted = value.split("_");
    const id = splitted[0];
    const text = splitted[1];
    setFormData((prev) => ({
      ...prev,
      workModel: {
        id,
        text,
      },
    }));
  };

  const { data } = useStoreState((state) => state.job);
  const dispatch = useStoreDispatch();
  const { push } = useRouter();

  const onSave = () => {
    const id = uuidv4();
    const newJob: IJob = {
      ...formData,
      postedDate: dayjs(formData.postedDate).format("DD/MM/YYYY"),
      jobVacancyCode: id,
    };

    const newData: Array<IJob> = [...data, newJob];
    dispatch(setData(newData));
    push("/");
  };

  return (
    <Layout title="Buat Lowongan">
      <VStack gap={5} width="100%">
        <Stack direction={{ base: "column", md: "row" }} width="100%" gap={5}>
          <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input
              placeholder="Eg: My Company"
              value={formData?.corporateName}
              onChange={(e) => onChangeForm("corporateName", e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Company Image (Link)</FormLabel>
            <Input
              placeholder="Eg: https://example.com/company.png"
              value={formData?.corporateLogo}
              onChange={(e) => onChangeForm("corporateLogo", e.target.value)}
            />
          </FormControl>
        </Stack>
        <FormControl isRequired>
          <FormLabel>Position Name</FormLabel>
          <Input
            placeholder="First name"
            value={formData.positionName}
            onChange={(e) => onChangeForm("positionName", e.target.value)}
          />
        </FormControl>
        <Stack direction={{ base: "column", md: "row" }} width="100%" gap={5}>
          <FormControl isRequired>
            <FormLabel>Work Model</FormLabel>
            <Select
              placeholder="Choose One"
              value={`${formData?.workModel?.id}_${formData?.workModel?.text}`}
              onChange={(e) => onChangeWorkModel(e.target.value)}
            >
              <option value="wt-001_On-site">On-site</option>
              <option value="wt-002_Hybrid">Hybrid</option>
              <option value="wt-003_Remote">Remote</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Employment Status</FormLabel>
            <Select
              placeholder="Choose One"
              value={formData.status}
              onChange={(e) => onChangeForm("status", e.target.value)}
            >
              <option value="Karyawan Tetap">Karyawan Tetap</option>
              <option value="Karyawan Kontrak">Karyawan Kontrak</option>
              <option value="Magang">Magang</option>
            </Select>
          </FormControl>
        </Stack>
        <FormControl isRequired>
          <FormLabel>Salary</FormLabel>
          <Stack
            direction={{ base: "column", md: "row" }}
            width="100%"
            gap={{ base: 2, md: 5 }}
            divider={<Text alignSelf="center">to</Text>}
          >
            <NumberInput
              min={0}
              width="100%"
              value={formData.salaryFrom}
              onChange={(v) => onChangeForm("salaryFrom", v)}
            >
              <NumberInputField width="100%" />
            </NumberInput>
            <NumberInput
              min={formData.salaryFrom}
              width="100%"
              value={formData.salaryTo}
              onChange={(v) => onChangeForm("salaryTo", v)}
            >
              <NumberInputField width="100%" />
            </NumberInput>
          </Stack>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Posted At</FormLabel>
          <Input
            placeholder="First name"
            type="date"
            value={formData.postedDate}
            onChange={(e) => onChangeForm("postedDate", e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea
            resize="none"
            value={formData.descriptions}
            onChange={(e) => onChangeForm("descriptions", e.target.value)}
          />
        </FormControl>
        <HStack
          gap={3}
          alignSelf="flex-end"
          width={{ base: "100%", md: "50%" }}
        >
          <Button
            colorScheme="teal"
            variant="outline"
            width="100%"
            as="a"
            href="/"
          >
            Cancel
          </Button>
          <Button colorScheme="teal" width="100%" onClick={onSave}>
            Save
          </Button>
        </HStack>
      </VStack>
    </Layout>
  );
}
