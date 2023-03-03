--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

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
-- Name: tokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tokens (
    id integer NOT NULL,
    token text NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "user_id" integer NOT NULL,
    url text NOT NULL,
    "short_url" text NOT NULL,
    "visit_count" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp without time zone DEFAULT now() NOT NULL
);

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;

--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;

--
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);

--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);

--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);

--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tokens VALUES (1, '322065c7-7147-470b-a4cd-dbcaed6e9755', 1, '2023-03-01 16:13:04.576317');
INSERT INTO public.tokens VALUES (2, '062ddaa3-63ad-476e-826e-3795d0b2be1f', 2, '2023-03-01 16:13:52.104612');
INSERT INTO public.tokens VALUES (3, '12b5f5f0-08a5-4a91-9f10-cd1da20c59c7', 3, '2023-03-02 08:27:19.821924');
INSERT INTO public.tokens VALUES (4, '874bde3c-3c3d-4a14-9130-60f1cc347d9e', 4, '2023-03-02 10:05:46.901121');
INSERT INTO public.tokens VALUES (5, 'a6a4f352-0a85-43d6-8f6d-1d3fcb35a3e3', 5, '2023-03-02 14:39:33.691254');
INSERT INTO public.tokens VALUES (6, 'de554361-75f1-442d-8dc8-253b36416edf', 6, '2023-03-02 19:17:22.229789');
INSERT INTO public.tokens VALUES (7, 'f01a6b56-0670-4399-b5a5-bb24e415977a', 7, '2023-03-03 06:42:58.534690');
INSERT INTO public.tokens VALUES (8, 'bcd3c689-8f35-47c1-9351-2e1b271d8aae', 8, '2023-03-03 12:51:15.206753');
--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 1, 'https://www.linkedin.com', 'Z8zOUEI-vAgGrcClXqybm', 0, '2023-03-01 13:14:29.805426');
INSERT INTO public.urls VALUES (2, 1, 'https://www.face.com', 'ksj7qFm3S4DPWR7hcqS-D', 0, '2023-03-01 13:14:30.55824');
INSERT INTO public.urls VALUES (3, 2, 'https://www.insta.com', 'arcLiRKfyhGFcAiFwtV99', 0, '2023-03-01 13:14:31.116471');
INSERT INTO public.urls VALUES (4, 1, 'https://www.twitter.com', 'UIC_1B-chVm9yRWRFNXqL', 0, '2023-03-01 13:14:31.501013');
INSERT INTO public.urls VALUES (5, 2, 'https://www.google.com', '1MlMIr7MaR1eb2tqpUvKL', 3, '2023-03-01 13:14:31.863976');
INSERT INTO public.urls VALUES (6, 2, 'https://www.github.com', 'hjK8nZ1q3eA-bI9pDjvP5', 0, '2023-03-03 09:21:01.123456');
INSERT INTO public.urls VALUES (7, 3, 'https://www.youtube.com', 'sTf2Q_7mNoC8rXJwuBjG9', 1, '2023-03-03 09:22:34.987654');
INSERT INTO public.urls VALUES (8, 4, 'https://www.amazon.com', 'RcA2mQGe2hbMWojW5dtvF', 2, '2023-03-03 09:24:17.765432');
INSERT INTO public.urls VALUES (9, 3, 'https://www.udemy.com', 'y6WKGU6xy1eJmfKjE7ZsT', 0, '2023-03-03 09:25:49.246810');
INSERT INTO public.urls VALUES (10, 4, 'https://www.wikipedia.org', 'Xr-SKBLpTJc-1NBvkm-Gj', 1, '2023-03-03 09:27:22.345678');

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'José', 'jose@driven.com', '$2b$10$szyd3/RW8hVxYNoN8BJNkuLLbc1jrZvJRI4Dg.xWSHFfgRu/AkhSq', '2023-03-01 16:11:42.198648');
INSERT INTO public.users VALUES (2, 'Maria', 'ana@driven.com', '$2b$10$BxrZjDbOnOCMLOrtstKvvuAtYhHwZ9tO5uBAbw1x1wfLk9SwF0xcO', '2023-03-01 16:12:31.33302');
INSERT INTO public.users VALUES (3, 'João', 'joao@driven.com', '$2b$10$2Snc/7YiVEz8MkH/0oTmgeRJhTlvbsnvyMsCkwmdmYbyDm3zZct8G', '2023-03-03 09:35:12.567890');
INSERT INTO public.users VALUES (4, 'Ana', 'ana@driven.com', '$2b$10$yC4LLrbkztbOX0v4S2gS1.Y81jHlOzZCv.nfh2/s9V7fML8JHlyV6', '2023-03-03 09:36:25.987654');
--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tokens_id_seq', 2, true);

--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 7, true);

--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);

--


ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);

--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);

--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);

--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);

--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);

--
-- PostgreSQL database dump complete
--