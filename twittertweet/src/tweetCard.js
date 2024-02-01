import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function TweetCard({ analyticsNum, content, url }) {
  return (
    <div>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            analyticsNum: {analyticsNum}
          </Typography>
          <Typography>{content}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href={url} target="_blank">
            <Button>Go to Tweet</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
