import { useSelector, useDispatch } from 'react-redux';
import { removeItem, addItem, removeCompletely } from '../ReduxStore/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="pt-20 px-4 pb-10">
      <Typography
        variant="h5"
        color="secondary.main"
        className="flex justify-center p-5"
      >
        ADD TO CART...
      </Typography>

      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div className="border-b">
              <div
                key={item.id}
                className="flex justify-around items-center   py-4 cursor-pointer"
                onClick={() =>
                  navigate(
                    `/products/${
                      item.section
                    }/${item.photographer.toLowerCase()}`
                  )
                }
              >
                <img
                  src={item.src}
                  className=" h-20 md:h-auto md:w-60 object-cover"
                />

                <div className="px-4 flex flex-col gap-3">
                  <div className="flex justify-between">
                    <h3>{item.photographer}</h3>
                    <p>₹ {item.price}</p>
                  </div>
                  <div className="flex items-center gap-3 justify-end">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(removeItem(item.id));
                      }}
                    >
                      -
                    </Button>

                    <span>{item.quantity}</span>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addItem(item));
                      }}
                    >
                      +
                    </Button>

                    <Button
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(removeCompletely(item.id));
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-6 mr-4 justify-self-end">
            Total: ₹ {total.toFixed(2)}
          </h2>
        </div>
      ) : (
        <div className="flex justify-center items-center py-20">
          No items yet..
        </div>
      )}
    </div>
  );
}
