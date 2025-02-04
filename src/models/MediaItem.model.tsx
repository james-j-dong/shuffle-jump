import User from "./User.model";
import UserComment from "./UserComment.model";
import Product from "./Product.model";

class MediaItem {
    id : string = "";
    likes : User[] = [];
    comments : UserComment[] = [];
    targetProduct : Product[] = [];
    tags : string[] = [];
}

export default MediaItem;