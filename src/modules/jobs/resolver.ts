import { ResolverMap } from "./../../types/graphql-utils";
import { Job } from "./../../entity";

export const resolvers: ResolverMap = {
  Query: {
    jobs: async (_: any) => {
      const jobs = await Job.find();
      return jobs;
    }
  },
  Mutation: {
    createJob: async (
      _: any,
      { date, customer, type, details, status }: GQL.ICreateJobOnMutationArguments
    ) => {
      const job = Job.create({
        date,
        customer,
        type,
        details,
        status
      });

      await job.save();

      return null;
    }
  }
};
