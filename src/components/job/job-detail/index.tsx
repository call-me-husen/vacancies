import currencyFormatter from "@/helper/currency-formatter";
import relativeTime from "@/helper/relative-time";
import { IJob } from "@/model/job/interface";
import {
  Card,
  CardBody,
  HStack,
  Icon,
  Image,
  VStack,
  Text,
  Box,
  CardHeader,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import {
  MdBrokenImage,
  MdMonetizationOn,
  MdPerson,
  MdWatchLater,
} from "react-icons/md";

interface IJobDetailProps {
  data: IJob;
  onProcess: (id: string) => void;
}

export default function JobDetail({
  data,
  onProcess,
}: IJobDetailProps): JSX.Element {
  const workArrangement = data.workModel
    ? `${data.status} - ${data.workModel.text}`
    : data.status;
  return (
    <VStack w="100%" maxW="container.md" margin="0 auto" gap={3}>
      <Card w="100%">
        <CardBody>
          <VStack gap={2} width="100%">
            <HStack gap={3} width="100%">
              <Image
                src={data.corporateLogo}
                boxSize={20}
                objectFit="contain"
                alt={data.corporateName}
                fallback={<Icon as={MdBrokenImage} boxSize={20} />}
              />
              <VStack gap={0}>
                <Text as="h2" fontWeight="bold" fontSize="md" textAlign="left">
                  {data.positionName}
                </Text>
                <Text as="h3" fontSize="sm" textAlign="left">
                  {data.corporateName}
                </Text>
              </VStack>
            </HStack>
          </VStack>
          <Box width="100%" bg="gray.100" p={2} borderRadius="md">
            <VStack gap={1} width="100%">
              <HStack gap={2} width="100%">
                <Icon as={MdMonetizationOn} fontSize="xs" />
                <Text fontSize="xs">{`${currencyFormatter(
                  data.salaryFrom
                )} - ${currencyFormatter(data.salaryTo)}`}</Text>
              </HStack>
              <HStack gap={2} width="100%">
                <Icon as={MdPerson} fontSize="xs" />
                <Text fontSize="xs">{workArrangement}</Text>
              </HStack>
              <HStack gap={2} width="100%">
                <Icon as={MdWatchLater} fontSize="xs" />
                <Text fontSize="xs" textTransform="capitalize">
                  {relativeTime(dayjs().format("DD/MM/YYYY"), data.postedDate)}
                </Text>
              </HStack>
            </VStack>
          </Box>
        </CardBody>
      </Card>
      <Card w="100%">
        <CardHeader>
          <Text as="h3" fontWeight="bold">
            Deskripsi Lowongan
          </Text>
        </CardHeader>
        <CardBody paddingTop={0}>
          <Box
            dangerouslySetInnerHTML={{ __html: data.descriptions }}
            position="relative"
            px={3}
          ></Box>
        </CardBody>
        <CardFooter>
          <Button
            onClick={() => onProcess(data.jobVacancyCode)}
            colorScheme={data.applied ? "orange" : "teal"}
            width="100%"
          >
            {data.applied ? "Tarik Lamaran" : "Kirim Lamaran"}
          </Button>
        </CardFooter>
      </Card>
    </VStack>
  );
}
