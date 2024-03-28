"use client";
import { deleteArticle } from "@/blogAPI";
import React from "react";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  id: string;
};

function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleDelete = async () => {
    await fetch(`${API_URL}/api/${id}`, {
      method: "DELETE",
    });

    router.push("/");
    router.refresh();
  };

  return (
    <div className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer">
      <button onClick={handleDelete}>削除</button>
    </div>
  );
}

export default DeleteButton;
