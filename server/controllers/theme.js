const fs = require("fs")
// let activeTheme = "green";

const getTheme = (req, res) => {
    let activeTheme = fs.readFileSync("theme.txt", "utf8")
    return res.status(200).json({ theme: activeTheme })
}

const setTheme = (req, res) => {
    const { theme } = req.body;
    fs.writeFileSync("theme.txt", theme)
    return res.status(200).json({ theme })
}

module.exports = {
    setTheme,
    getTheme
}