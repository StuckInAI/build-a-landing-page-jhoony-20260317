import { NextRequest, NextResponse } from 'next/server';
import 'reflect-metadata';
import { getDataSource } from '@/lib/datasource';
import { Subscriber } from '@/entities/Subscriber';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email?: string };
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const dataSource = await getDataSource();
    const subscriberRepository = dataSource.getRepository(Subscriber);

    const existing = await subscriberRepository.findOne({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    const subscriber = subscriberRepository.create({
      email,
      subscribedAt: new Date(),
    });

    await subscriberRepository.save(subscriber);

    return NextResponse.json(
      { message: 'Successfully subscribed!', email },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
