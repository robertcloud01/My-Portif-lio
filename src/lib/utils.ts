import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + '...';
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 10);
}

export function discountPercent(price: string, originalPrice?: string): number | null {
  if (!originalPrice) return null;
  const current = Number(price.replace(/[^\d]/g, ''));
  const original = Number(originalPrice.replace(/[^\d]/g, ''));
  if (!current || !original || original <= current) return null;
  return Math.round(((original - current) / original) * 100);
}
