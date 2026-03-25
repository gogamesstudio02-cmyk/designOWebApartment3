function setupReactBridge(unityInstance) {

  window.addEventListener("message", function (event) {

    if (event.data.type === "SEND_USER_SAVE_DATA") {

      console.log("Received from React:", event.data.value);

      const jsonData = JSON.stringify(event.data.value);

      unityInstance.SendMessage(
        "React_Recevice",
        "RECEIVE_USER_SAVE_DATA",
        jsonData
      );
    }

  });

}