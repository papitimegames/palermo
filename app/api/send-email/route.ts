import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { to, subject, text } = await request.json();

    const data = await resend.emails.send({
      from: 'Papiweb <notificaciones@tudominio.com>',
      to: [to],
      subject: subject,
      text: text,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 });
  }
}