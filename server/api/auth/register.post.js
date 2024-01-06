import { sendError } from "h3";
import { createUser } from "../../db/user.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password, email, repeatPassword } = body;

  if (!username || !password || !email || !repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid Params",
      })
    );
  }
  if (password != repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Passwords not match",
      })
    );
  }

  const data = {
    username,
    password,
    email,
    displayPicture: "https://picsum.photos/200/300",
  };
  const user = await createUser(data);

  return { body: user };
});
