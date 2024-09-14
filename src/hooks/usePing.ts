import { useState } from "react";
import { API_INTERNAL } from "../utils/configApi";

const usePingServer = () => {
  const [serverStatus, setServerStatus] = useState<string | null>(null);

  const pingServer = async () => {
    try {
      const response = await fetch(API_INTERNAL.PING);
      if (response.ok) {
        const data = await response.json();
        setServerStatus(`Server is up: ${data.timestamp}`);
      } else {
        setServerStatus("Server is down");
      }
    } catch (error) {
      setServerStatus("Server is down");
    }
  };

  return { serverStatus, pingServer };
};

export default usePingServer;
