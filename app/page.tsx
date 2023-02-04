"use client"
import Link from "next/link"

import AddPost from "./AddPost"
import { QueryClient, QueryClientProvider } from "react-query"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient()

async function getPost() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data: { id: number, title: string }[] = await getPost()
  console.log(data)
  return (
    <main className="py-8 px-48">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <AddPost />

        <Link className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md" href={'/'}>Go to the Dashboard</Link>
        {data.map((post) => (
          <h1 className="text-lg py-6">{post.title}</h1>
        ))}
      </QueryClientProvider>
    </main>
  )
}
