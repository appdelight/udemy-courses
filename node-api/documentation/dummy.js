const dummy = {
	"/sessionLogs": {
		get: {
			security: {
				bearerAuth: {},
			},
			tags: ["Session Logs"],
			summary: "Api for admin to get all sessions",
			parameters: [
				{
					name: "authorization",
					in: "header",
					required: true,
					description: "access token",
					type: "string",
				},
				{
					name: "limit",
					in: "query",
					required: true,
					type: "integer",
					default: 10,
				},
				{
					name: "skip",
					in: "query",
					required: true,
					type: "integer",
					default: 0,
				},
				{
					name: "userId",
					in: "query",
					type: "string",
				},
			],
			responses: {
				200: {
					description: "OK",
					schema: {
						type: "object",
						properties: {
							message: {
								type: "string",
								example: "Success",
							},
							data: {
								type: "array",
								items: {
									$ref: "#/definitions/sessionLogsRef",
								},
							},
							totalCount: {
								type: "number",
								example: 1,
							},
						},
					},
				},
				204: {
					description: "Data not found!",
					schema: {
						$ref: "#/definitions/204",
					},
				},
				404: {
					schema: {
						$ref: "#/definitions/404",
					},
				},
				401: {
					schema: {
						$ref: "#/definitions/401",
					},
				},
				500: {
					schema: {
						$ref: "#/definitions/500",
					},
				},
			},
		},
	},
};
