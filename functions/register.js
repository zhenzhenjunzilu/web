export async function onRequestPost({ request, env }) {
    const data = await request.json();
    const { user, password } = data;
    await env.DB.prepare("INSERT INTO user (user, password) VALUES (?, ?)").bind(user, password).run();
    return new Response(JSON.stringify({ success: true }), { status: 200 });
}
