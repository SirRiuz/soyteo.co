# FastApi
import fastapi


router = fastapi.APIRouter(prefix="/healthcheck")


@router.get(
    "",
    tags=["healthcheck"],
    summary="Get Health Check of application",
    responses={
        200: {
            "description": "Created route response.",
            "content": {"application/json": {"example": {"status": "ok"}}},
        },
    },
)
async def healthcheck() -> dict:
    return {"status": "ok"}
