# Libs
from pydantic import BaseModel


class Schema(BaseModel):

    context: dict = {}

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.context = kwargs.get("context", {})

    def to_representation(self) -> dict:
        # This remove the context prop from the representation
        data = self.model_dump()
        data.pop("context", None)

        return data
