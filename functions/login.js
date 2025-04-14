export async function onRequestPost({ request, env }) {
    const data = await request.json();
    const { user, password } = data;
    const result = await env.DB.prepare("SELECT * FROM user WHERE user = ? AND password = ?").bind(user, password).first();
    if (result) return new Response(JSON.stringify({ success: true }), { status: 200 });
    return new Response(JSON.stringify({ success: false }), { status: 401 });
}
