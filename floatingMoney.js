(function () {
    function showFloatingMoney(amount, type = "normal") {
        const layer = document.getElementById("floating-layer");
        if (!layer) return;

        const el = document.createElement("div");
        el.className = "floating-money";

        let colorClass = "text-white";
        let suffix = "";

        if (amount < 0) {
            colorClass = "text-red-500";
        } else {
            colorClass = "text-green-500";
        }

        if (type === "crit-loss") {
            colorClass = "text-red-600";
            suffix = "\n(GẤP ĐÔI!)";
            el.style.fontSize = "5rem";
        }

        el.classList.add(colorClass);
        el.innerText = `${amount > 0 ? "+" : ""}${amount.toLocaleString()}k${suffix}`;

        layer.appendChild(el);

        setTimeout(() => el.remove(), 2000);
    }

    // 👇 GẮN GLOBAL
    window.showFloatingMoney = showFloatingMoney;
})();
