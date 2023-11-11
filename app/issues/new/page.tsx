"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <div className="max-w-xl">
     {error && <Callout.Root color="red" className="mb-5">
      <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected Error occured");
          }
        })}
        className="space-y-3"
      >
        <TextField.Root>
          <TextField.Input placeholder="title..." {...register("title")} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="description..." {...field} />
          )}
        />
        <Button className="cursor-pointer">Submit New issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;