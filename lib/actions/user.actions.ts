"use server";

// ** Create account flow ** //
// 1. Users enters full name and email
// 2. Check if the user already exists using the email (we will use it to identify if we still need to create an user document or not)
// 3. Send OTP to user's email
// 4. This will send a secret key to the user's email for creating the user session.
// 5 Create a new user document if the user does not exist
// 6. Return the user's accountId that will be used to complete the login process.
// 7. Verify OTP and authenticate to login

import { createAdminClient } from "../appwrite";
import { appwriteConfig } from "../appwrite/config";
import { Query, ID } from "node-appwrite";
import { parseStringify } from "../utils";

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", email)]
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(message, error);
  throw error
}

const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email)

    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);

  const accountId = await sendEmailOTP({email});
  if(!accountId) throw new Error("Failed to send an OTP");

  if(!existingUser){
    const { databases } = await createAdminClient();
    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        fullName,
        email,
        avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        accountId,
      }
    );
  }
  return parseStringify({accountId});
};
