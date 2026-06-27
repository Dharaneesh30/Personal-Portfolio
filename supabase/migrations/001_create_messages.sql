create extension if not exists pgcrypto;

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

create index if not exists messages_created_at_idx on public.messages (created_at desc);

alter table public.messages enable row level security;

drop policy if exists "Allow public insert to messages" on public.messages;
create policy "Allow public insert to messages"
  on public.messages
  for insert
  to anon
  with check (true);

drop policy if exists "Deny public select on messages" on public.messages;
create policy "Deny public select on messages"
  on public.messages
  for select
  to anon
  using (false);
