class User {
  id: number;
  name: string;
  created_at: string;
  image_url: string;
  constructor(id, name, created_at, image_url) {
    this.id = id;
    this.name = name;
    this.created_at = created_at;
    this.image_url = image_url;
  }
}
