function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";
    snowflake.style.setProperty("--start-x", Math.random());
    snowflake.style.setProperty("--end-x", Math.random());
    document.body.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 1000);
}

setInterval(createSnowflake, 200);

