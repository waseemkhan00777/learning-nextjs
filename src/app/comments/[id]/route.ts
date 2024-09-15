import { comments } from "../data";

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  },
) {
  const comment = comments.find(comm => comm.id === parseInt(params.id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  },
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(com => com.id === parseInt(params.id));

  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  },
) {
  const index = comments.findIndex(com => com.id === parseInt(params.id));
  let newComments;
  if (index) {
    newComments = comments.filter(comm => comm.id !== parseInt(params.id));
  }
  return Response.json(newComments);
}
