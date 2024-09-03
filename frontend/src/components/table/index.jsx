import {
  Table,
  Button,
  TableHeader,
  TableColumn,
  TableBody,
  TableCell,
  TableRow,
  Spinner,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const Tables = {
  CategoryTable: ({ categories, onEdit }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (categories.length > 0 || categories.length === 0) {
        setIsLoading(false);
      }
    }, [categories]);

    return (
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-4">Manage Categories</h3>
        <Table
          aria-label="Manage Categories"
          bordered
          shadow={false}
          selectionMode="none"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <TableHeader>
            <TableColumn>Category Name</TableColumn>
            <TableColumn>Is Hots</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody
            isLoading={isLoading}
            loadingContent={<Spinner label="Loading..." />}
            emptyContent={"No data categories found."}
          >
            {categories?.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.title}</TableCell>
                <TableCell>{category.isHots ? "True" : "False"}</TableCell>
                <TableCell>
                  <Button
                    auto
                    color="primary"
                    onClick={() => onEdit(category.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
  TopicTable: ({ topics, onEdit }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (topics.length > 0 || topics.length === 0) {
        setIsLoading(false);
      }
    }, [topics]);
    return (
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-4">Manage Topics</h3>
        <Table
          aria-label="Manage Topics"
          bordered
          shadow={false}
          selectionMode="none"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <TableHeader>
            <TableColumn>Topic Title</TableColumn>
            <TableColumn>Category</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody
            isLoading={isLoading}
            loadingContent={<Spinner label="Loading..." />}
            emptyContent={"No found data topics."}
          >
            {topics?.map((topic) => (
              <TableRow key={topic.id}>
                <TableCell>{topic.title}</TableCell>
                <TableCell>{topic.category}</TableCell>
                <TableCell>
                  <Button auto color="primary" onClick={() => onEdit(topic.id)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
  AchievementTable: ({ achievements, onEdit }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (achievements.length > 0 || achievements.length === 0) {
        setIsLoading(false);
      }
    }, [achievements]);

    return (
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-4">Manage Achievements</h3>
        <Table
          aria-label="Manage Achievements"
          bordered
          shadow={false}
          selectionMode="none"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <TableHeader>
            <TableColumn>Title</TableColumn>
            <TableColumn>Required Points</TableColumn>
            <TableColumn>Level</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody
            isLoading={isLoading}
            loadingContent={<Spinner label="Loading..." />}
            emptyContent={"No found data achievements"}
          >
            {achievements?.map((achievement) => (
              <TableRow key={achievement.id}>
                <TableCell>{achievement.title}</TableCell>
                <TableCell>{achievement.required_points}</TableCell>
                <TableCell>{achievement.level}</TableCell>
                <TableCell>
                  <Button
                    auto
                    color="primary"
                    onClick={() => onEdit(achievement.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

export { Tables };
