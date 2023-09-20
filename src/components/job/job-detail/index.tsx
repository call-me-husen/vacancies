import Button from "@/components/common/Button";
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
}

export default function JobDetail({ data }: IJobDetailProps): JSX.Element {
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
                <Text as="h2" fontWeight="bold" fontSize="md">
                  {data.positionName}
                </Text>
                <Text as="h3" fontSize="sm">
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
                  {relativeTime(data.postedDate, dayjs().format("DD/MM/YYYY"))}
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
          <Button onClick={() => null}>Kirim Lamaran</Button>
        </CardFooter>
      </Card>
    </VStack>
  );
}
