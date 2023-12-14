export const revalidationRule = (
    revalidateOnFocus = false,
    revalidateOnReconnect = true,
    revalidateIfStale = false
  ) => {
    return {
      revalidateOnFocus,
      revalidateIfStale,
      revalidateOnReconnect,
    };
  };
  
export const fetchOrderRule = (ascending = false) => {
    return { ascending };
  };
  
export const fetchCountRule = (head = true) => {
    return { count: "exact", head };
  };