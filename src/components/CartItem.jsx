
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({post, postIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div>

        <div>
          <img src={post.image} />
        </div>
        <div>
          <h1>{post.title}</h1>
          <h1>{post.description}</h1>
          <div>
            <p>{post.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
