export async function serializeResponse(response: Response, text: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const state = {} as Record<string, any>;

    state.status = response.status;
    state.statusText = response.statusText;
    state.ok = response.ok;
    state.redirected = response.redirected;
    state.type = response.type;
    state.url = response.url;
    state.bodyUsed = true;
    state.body = text;

    state.headers = {};
    response.headers.forEach((value, key) => {
        state.headers[key] = value;
    });

    return state;
}
