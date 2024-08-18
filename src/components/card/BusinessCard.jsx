import styled from "styled-components";
import { skg_info } from "../../assets/skg_info";
import seokyung_logo from "../../assets/img/seokyung_logo.png";
import { ReactComponent as PhoneIcon } from "../../assets/svg/phone_icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/svg/email_icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/github_icon.svg";
import { ReactComponent as TistoryIcon } from "../../assets/svg/tistory_icon.svg";

const BusinessCard = () => {
	return (
		<Card>
			<Logo>
				<img src={seokyung_logo} alt="seokyung_logo" />
			</Logo>
			<InfoWrapper>
				<InfoHeader>
					<NameBox>
						<h1>{skg_info.name}</h1>
						<span>{skg_info.eng_name}</span>
					</NameBox>
					<IconBox>
						<a className="content" href={`tel:${skg_info.tel}`}>
							<PhoneIcon />
						</a>
						<a className="content" href={`mailto:${skg_info.email}`}>
							<EmailIcon />
						</a>
						<a
							className="content"
							href={skg_info.github}
							target="_blank"
							rel="noreferrer"
						>
							<GithubIcon />
						</a>
						<a
							className="content"
							href={skg_info.blog}
							target="_blank"
							rel="noreferrer"
						>
							<TistoryIcon />
						</a>
					</IconBox>
				</InfoHeader>
				<Divider />
				<InfoMain>
					<InfoBox>
						<span className="title">birth</span>
						<span className="content">{skg_info.birth}</span>
					</InfoBox>
					<InfoBox>
						<span className="title">location</span>
						<span className="content">{skg_info.location}</span>
					</InfoBox>
					<InfoBox>
						<span className="title">tel</span>
						<span className="content">{skg_info.tel}</span>
					</InfoBox>
					<InfoBox>
						<span className="title">email</span>
						<span className="content">{skg_info.email}</span>
					</InfoBox>
					<InfoBox>
						<span className="title">education</span>
						<span className="content">{skg_info.education}</span>
					</InfoBox>
				</InfoMain>
			</InfoWrapper>
		</Card>
	);
};

const Card = styled.div`
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	gap: 2.25rem;
	padding: 2rem 1.5rem;
	background-color: var(--bg-color-light);
	border-radius: 15px;
	box-shadow: 0 0 20px 2px rgba(47, 19, 5, 0.5);
	@media all and (max-width: 768px) {
		flex-direction: column;
		gap: 0.75rem;
		padding: 1.25rem 1rem;
	}
`;

const Logo = styled.div`
	overflow: hidden;
	padding: 1rem;
	background-color: #f4d6ae;
	border-radius: 50%;
	img {
		width: 100%;
		max-width: 200px;
		@media all and (max-width: 768px) {
			max-width: 140px;
		}
	}
`;

const InfoWrapper = styled.div`
	width: 70%;
	@media all and (max-width: 768px) {
		width: 100%;
	}
`;

const InfoHeader = styled.div`
	display: flex;
	align-items: flex-end;
	padding: 0 0.5rem;
	@media all and (max-width: 768px) {
		flex-direction: column;
		gap: 0.625rem;
	}
`;

const InfoMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	padding: 0 0.25rem;
	@media all and (max-width: 768px) {
		gap: 0.75rem;
	}
`;

const Divider = styled.hr`
	width: 100%;
	height: 0.75px;
	margin: 1rem 0 1.25rem 0;
	background-color: #5e5e5e;
	border: none;
	@media all and (max-width: 768px) {
		margin: 0.75rem 0 1rem 0;
	}
`;

const NameBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-end;
	gap: 0.25rem;
	width: 100%;
	h1 {
		color: var(--font-color-primary);
		font-family: var(--font-family-kor-title);
		font-size: 2.25rem;
	}
	span {
		color: var(--font-color-secondary);
		font-family: var(--font-family-eng);
		font-size: 1rem;
		letter-spacing: -0.5px;
		text-transform: capitalize;
	}
`;

const IconBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: flex-end;
	gap: 0.5rem;
	width: 100%;
	svg {
		color: var(--font-color-secondary);
		width: 26px;
		height: auto;
	}
`;

const InfoBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	@media all and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.25rem;
	}
	.title {
		color: var(--font-color-primary);
		font-family: var(--font-family-eng);
		font-size: 1.125rem;
		font-weight: 500;
		letter-spacing: -0.25px;
		text-transform: capitalize;
		text-align: left;
	}
	.content {
		color: var(--font-color-secondary);
		font-size: 1rem;
		font-weight: 500;
		letter-spacing: -0.25px;
		line-height: 1.25rem;
		word-spacing: -1px;
	}
`;

export default BusinessCard;
