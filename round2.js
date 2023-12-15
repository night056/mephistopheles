const correctOutputs = {
  output1: "10 5",
  output2: "10",
  output3: "C",
  output4: "17"
};

const showSuccess = (elementId) => {
  const messageElement = document.getElementById(elementId);
  messageElement.classList.remove("error-message");
  messageElement.textContent = "Correct!";

  // Create an array of image sources for each success
 /* const successImages = ['logo.png'];

  // Create an image container
  const imageContainer = document.createElement("div");
  imageContainer.className = "success-images";

  // Append images to the container
  successImages.forEach((imageSrc) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;
    imgElement.className = "success-image";
    imageContainer.appendChild(imgElement);
  });

  // Append the image container to the message container
  messageElement.appendChild(imageContainer);*/
};

const showError = (elementId, message) => {
  const messageElement = document.getElementById(elementId);
  messageElement.classList.add("error-message");
  messageElement.textContent = message;
};

const checkAnswers = (event, codeNumber) => {
  event.preventDefault();

  const outputId = `output${codeNumber}`;
  const messageContainerId = `message-container${codeNumber}`;

  const userOutput = document.getElementById(outputId).value.trim();
  const correctOutput = correctOutputs[outputId];

  if (userOutput !== correctOutput) {
    showError(messageContainerId, `Wrong answer for code #${codeNumber}! Try again.`);
    return;
  }

  // All answers correct! Display success message and images
  showSuccess(messageContainerId);
};
