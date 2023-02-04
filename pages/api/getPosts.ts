import prisma from "../../prisma/client"

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const data = await prisma.post.findMany({})

      return res.status(200).json(data)
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" })
    }
  }
}
