import { Card, CardBody } from "@nextui-org/react";

const Cards = {
  CardAchievement: () => {
    return <div>card achievement</div>;
  },
  CardRecent: () => {
    return <div>card recent</div>;
  },
  CardCategory: () => {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <h1>Test</h1>
        </CardBody>
      </Card>
    );
  },
};

export { Cards };
