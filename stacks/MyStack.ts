import { StackContext, Api, NextjsSite } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  // const api = new Api(stack, "api", {
  //   routes: {
  //     "GET /": "functions/lambda.handler",
  //   },
  // });
  // stack.addOutputs({
  //   ApiEndpoint: api.url,
  // });

  const site = new NextjsSite(stack, "site", {
    path: "frontend"
  })


}
