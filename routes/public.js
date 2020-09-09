"use strict";

const
    path = require("path"),
    { Router, "static": xp_static } = require("express"),
    router = Router();

const PUBLIC_PATH = path.resolve(process.mainModule.path, "public");

router.use(
    xp_static(PUBLIC_PATH, {
        cacheControl: false,
        etag: false,
        index: ["index.htm"],
    })
);
module.exports = exports = router;