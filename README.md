Xilp

- A sleek portfolio design to showcase my work experience, projects, open source contributions, blogs, testimonials and achievements to recruiters, companies and founders.

- Built with NextJS, Prisma, Lenis for smooth scroll animation, ShadCN Ui components.

- It have interactive click sounds and vibrations. The data is getting fetched by the backend and database and get cached.

- used bun package with nextjs.

Setup

- ```git clone git@github.com:nishidhx/xilp.git``` for ssh key.
- ```git clone https://github.com/nishidhx/xilp.git``` for https web url.
- ```cp .env.example .env```
- set the ```DATABASE_URL``` in .env.
- ```bun install```
- ```bun --bunx prisma migrate dev``` make the db sync with your ORM.
- ```bun --bunx prisma generate``` generate prisma client.
- ```bun dev``` for development purposes.
- ```bun build``` for production purposes.


Made with ❤️ by xnishidh.