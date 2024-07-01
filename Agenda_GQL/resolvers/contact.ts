import { GraphQLError } from "graphql";
import { ContactModelType } from "../db/Contacts.ts";
import { getCapitalInfo } from "../lib/apifuntions.ts";
export const Contact = {
  time: async (parent: ContactModelType): Promise<string> => {
    try {
      const capitalInfo = await getCapitalInfo(parent.capital);
      return capitalInfo.datetime;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err);
    }
  },
};