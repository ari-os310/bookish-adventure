--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: authors; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.authors (
    id integer NOT NULL,
    name text NOT NULL,
    date_of_death date,
    homepage text,
    headshot_url text,
    date_of_birth date
);


ALTER TABLE public.authors OWNER TO bill;

--
-- Name: authors_id_seq; Type: SEQUENCE; Schema: public; Owner: bill
--

CREATE SEQUENCE public.authors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.authors_id_seq OWNER TO bill;

--
-- Name: authors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bill
--

ALTER SEQUENCE public.authors_id_seq OWNED BY public.authors.id;


--
-- Name: books; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title text NOT NULL,
    publication_date date,
    author_id integer NOT NULL,
    cover_image_url text,
    summary text,
    subtitle text
);


ALTER TABLE public.books OWNER TO bill;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: bill
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.books_id_seq OWNER TO bill;

--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bill
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: authors id; Type: DEFAULT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.authors ALTER COLUMN id SET DEFAULT nextval('public.authors_id_seq'::regclass);


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Data for Name: authors; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.authors (id, name, date_of_death, homepage, headshot_url, date_of_birth) FROM stdin;
2	Anna Wiener	\N	https://www.annawiener.com/	https://images.gr-assets.com/authors/1569785505p8/3948574.jpg	\N
3	Sarah Andersen	\N	http://sarahcandersen.com/	https://images.gr-assets.com/authors/1450904865p8/14144506.jpg	\N
4	\nAlison Bechdel\n	\N	http://www.dykestowatchoutfor.com/	https://images.gr-assets.com/authors/1245100306p8/21982.jpg	1960-09-10
5	Phoebe Robinson	\N	http://www.phoeberobinson.com/	https://images.gr-assets.com/authors/1479071142p8/15080033.jpg	\N
6	 Caroline Criado-Pérez\n	\N	https://www.carolinecriadoperez.com/	https://static.wixstatic.com/media/96f7da_de9fec69b5c0447592d5c80c8202a2df~mv2.png/v1/crop/x_0,y_75,w_570,h_709/fill/w_444,h_552,al_c,q_85,usm_0.66_1.00_0.01/Screen%20Shot%202018-04-23%20at%2015_07_47.webp	1984-06-01
7	 Ottessa Moshfegh\n	\N	https://en.wikipedia.org/wiki/Ottessa_Moshfegh	https://api.time.com/wp-content/uploads/2018/07/moshfegh-ottessa-author-my-last-year-of-rest-and-relaxation.jpg?w=686&quality=85	1981-05-20
\.


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.books (id, title, publication_date, author_id, cover_image_url, summary, subtitle) FROM stdin;
9	Homesick for Another World 	2017-01-17	7	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1469408007l/30079724.jpg	There's something eerily unsettling about Ottessa Moshfegh's stories, something almost dangerous, while also being delightful, and even laugh-out-loud funny. Her characters are all unsteady on their feet in one way or another; they all yearn for connection and betterment, though each in very different ways, but they are often tripped up by their own baser impulses and existential insecurities.	\N
1	Uncanny Valley	2020-02-14	2	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559568004l/45186565.jpg	In her mid-twenties, at the height of tech industry idealism, Anna Wienerstuck, broke, and looking for meaning in her work, like any good millennial--left a job in book publishing for the promise of the new digital economy.	A Memoir
8	Invisible Women	2019-03-12	6	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550780394l/44083621._SY475_.jpg	Data is fundamental to the modern world. From economic development, to healthcare, to education and public policy, we rely on numbers to allocate resources and make crucial decisions. But because so much data fails to take into account gender, because it treats men as the default and women as atypical, bias and discrimination are baked into our systems. And women pay tremendous costs for this bias, in time, money, and often with their lives.	Data Bias in a World Designed for Men 
6	Herding Cats 	2018-03-27	3	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522799608l/35924705._SX318_.jpg	Adjusting to life as a world-famous cartoonist isn't easy. Terrifying deadlines, piles of junk-food wrappers under a glowing computer screen, and an ever-growing horde of pets....umm, never mind--it's pretty much the same.	\N
2	Fun Home	2007-06-05	4	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440097020l/26135825._SY475_.jpg	In this graphic memoir, Alison Bechdel charts her fraught relationship with her late father.	A Family Tragicomic 
3	You Can't Touch My Hair	2016-10-04	5	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1477907975l/29496435._SY475_.jpg	A hilarious and affecting essay collection about race, gender, and pop culture from celebrated stand-up comedian and WNYC podcaster Phoebe Robinson.	And Other Things I Still Have to Explain
7	 Everything's Trash, But It's Okay 	2018-10-16	5	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1527080689l/38649805.jpg	Robinson's latest essay collection is a call to arms. She tackles a wide range of topics, such as giving feminism a tough-love talk in hopes it can become more intersectional; telling society's beauty standards to kick rocks; and demanding that toxic masculinity close its mouth and legs (enough with the manspreading already!), and get out of the way so true progress can happen.	\N
5	Adulthood Is a Myth 	2016-03-08	3	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1481219756l/25855506._SX318_.jpg	Are you a special snowflake?\nDo you enjoy networking to advance your career?\nIs adulthood an exciting new challenge for which you feel fully prepared?\n\nUgh. Please go away.	\N
4	Big Mushy Happy Lump	2017-03-07	3	https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490071048l/30754980._SX318_.jpg	Sarah Andersen's second comics collection picks up right where the first left off - huddled under a pile of blankets avoiding the responsibilities of the real world.	\N
\.


--
-- Name: authors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bill
--

SELECT pg_catalog.setval('public.authors_id_seq', 7, true);


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bill
--

SELECT pg_catalog.setval('public.books_id_seq', 9, true);


--
-- Name: authors authors_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT authors_pkey PRIMARY KEY (id);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: books books_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.authors(id);


--
-- PostgreSQL database dump complete
--

