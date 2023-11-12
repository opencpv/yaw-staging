import supabase from "./supabaseClient";

const realTime = (channel: string, table: string, payload: () => void ) => {
    const messages = supabase
      .channel(channel)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: table },
        () => {
          payload();
        }
      )
      .subscribe();
}

export default realTime;