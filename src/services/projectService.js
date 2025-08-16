const SERVICE_API = `${import.meta.env.VITE_SERVICE_URL}`;

export async function createProject(title, description) {
    const response = await fetch(`${SERVICE_API}/api/Auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
}