export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { userName, password, email, repeatPassword } = body;

  if (!userName || !password || !email || !repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid Params",
      })
    );
  } else {
    console.log("params", userName, password, email, repeatPassword);
    console.log("event", event);
  }

  return { body };
});
