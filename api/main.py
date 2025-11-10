# FastApi
from fastapi import FastAPI
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware

# Libs
from core.settings import ALLOWER_CORS_ORIGINS

# Modules
from modules.healthcheck.routes import router as healthcheck_router


# Set up FastApi config
app = FastAPI()
handler = Mangum(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWER_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Map the API routes
app.include_router(healthcheck_router)
