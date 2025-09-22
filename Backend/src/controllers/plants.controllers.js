import { analyzePlantDisease } from "../Services/ai.service.js";
import { asyncHandler } from "../utils/asynicHandler.js";
import { ApiError } from "../utils/apiError.js";

const detectDisease = asyncHandler(async (req, res) => {
    // Get the image URL from the request body
    const { imageUrl } = req.body;

    if (!imageUrl) {
        throw new ApiError(400, "Image URL is required");
    }

    try {
        const result = await analyzePlantDisease(imageUrl);
        return res.json(result);
    } catch (error) {
        console.error("Error detecting disease:", error);
        throw new ApiError(500, "Failed to analyze plant disease");
    }
});

export { detectDisease }