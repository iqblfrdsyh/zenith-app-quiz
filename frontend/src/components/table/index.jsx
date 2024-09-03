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
import ButtonPopup from "../buttonPopup";

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
                <TableCell>{topic.categories[0].title}</TableCell>
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
  QuizTable: ({ quizzes, onEdit, onDelete, onConfirm }) => {
    return (
      <Table
        aria-label="Quiz Table"
        bordered
        shadow={false}
        selectionMode="none"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <TableHeader>
          <TableColumn>Topic</TableColumn>
          <TableColumn>Question</TableColumn>
          <TableColumn>Option 1</TableColumn>
          <TableColumn>Option 2</TableColumn>
          <TableColumn>Option 3</TableColumn>
          <TableColumn>Option 4</TableColumn>
          <TableColumn>Correct Answer</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {quizzes?.map((quiz) => (
            <TableRow key={quiz.id}>
              <TableCell>{quiz.topic.title}</TableCell>
              <TableCell>{quiz.question}</TableCell>
              <TableCell>{quiz.option1}</TableCell>
              <TableCell>{quiz.option2}</TableCell>
              <TableCell>{quiz.option3}</TableCell>
              <TableCell>{quiz.option4}</TableCell>
              <TableCell>{quiz.correct_answer}</TableCell>
              <TableCell className="grid grid-cols-2 gap-2">
                <Button
                  flat
                  auto
                  color="primary"
                  onClick={() => onEdit(quiz.id)}
                >
                  Edit
                </Button>
                <ButtonPopup
                  title={"Warning!"}
                  text={"Are you sure to delete this quiz?"}
                  icon={"warning"}
                  onConfirm={() => onDelete(quiz.id)}
                  confirmButtonText={"Delete"}
                  cancelButtonText={"Cancel"}
                  confirmButtonColor={"red"}
                  flat
                  auto
                  color="danger"
                >
                  Delete
                </ButtonPopup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export { Tables };
