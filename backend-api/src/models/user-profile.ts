export type UserProfileJson = {
  user_account_id: number;
  username: string;
  created_at: string;
  image_url: string;
};

export default class UserProfile {
  user_account_id: number;
  username: string;
  created_at: string;
  image_url: string;
  constructor(jsonObject: UserProfileJson) {
    Object.assign(this, jsonObject);
  }
}
