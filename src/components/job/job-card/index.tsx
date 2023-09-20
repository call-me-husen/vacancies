import currencyFormatter from "@/helper/currency-formatter";
import { IJob } from "@/model/job/interface";
import {
  Badge,
  Button,
  Card,
  CardBody,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  MdBrokenImage,
  MdMonetizationOn,
  MdPerson,
  MdWatchLater,
} from "react-icons/md";
interface IJobCardProps {
  data: IJob;
  onOpenDetail: (id: string) => void;
  onSubmitJob: (id: string) => void;
}
export default function JobCard({
  data,
  onOpenDetail,
  onSubmitJob,
}: IJobCardProps): JSX.Element {
  return (
    <Card>
      <CardBody position="relative">
        <VStack gap={1} alignItems="flex-start">
          <Image
            src={data.corporateLogo}
            boxSize={10}
            objectFit="contain"
            alt={data.corporateName}
            fallback={<Icon as={MdBrokenImage} boxSize={10} />}
          />
          <VStack gap={0} alignItems="flex-start">
            <Text as="h2" fontWeight="bold" fontSize="lg">
              {data.positionName}
            </Text>
            <Text fontSize="sm" color="teal.600">
              {data.corporateName}
            </Text>
          </VStack>
          <VStack gap={0} alignItems="flex-start">
            <HStack gap={2}>
              <Icon as={MdMonetizationOn} fontSize="xs" />
              <Text fontSize="xs">{currencyFormatter(data.salaryTo)}</Text>
            </HStack>
            <HStack gap={2}>
              <Icon as={MdPerson} fontSize="xs" />
              <Text fontSize="xs">{data.status}</Text>
            </HStack>
            <HStack gap={2}>
              <Icon as={MdWatchLater} fontSize="xs" />
              <Text fontSize="xs">{data.postedDate}</Text>
            </HStack>
          </VStack>
          <HStack gap={2} width="100%">
            <Button
              size="sm"
              colorScheme="teal"
              width="100%"
              marginTop={2}
              variant="outline"
              onClick={() => onOpenDetail(data.jobVacancyCode)}
            >
              Lihat Detail
            </Button>
            <Button
              size="sm"
              colorScheme="teal"
              width="100%"
              marginTop={2}
              onClick={() => onSubmitJob(data.jobVacancyCode)}
              isDisabled={data.applied}
            >
              {data.applied ? "Lamaran Terkirim" : "Kirim Lamaran"}
            </Button>
          </HStack>
        </VStack>
        {data.workModel && (
          <Badge
            position="absolute"
            right="16px"
            top="16px"
            colorScheme="green"
          >
            {data.workModel?.text}
          </Badge>
        )}
      </CardBody>
    </Card>
  );
}
