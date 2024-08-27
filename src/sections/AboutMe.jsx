import styled from "styled-components";
import {
	SectionWrapperOuter,
	SectionWrapperInner,
} from "../components/section/SectionWrapper";
import BusinessCard from "../components/card/BusinessCard";

function AboutMe() {
	return (
		<SectionWrapperOuter id="about-me" $background="var(--color-grey-brown)">
			<SectionWrapperInner>
				<Wrapper>
					<Title>FE Developer Seokyung</Title>
					<BusinessCard />
				</Wrapper>
			</SectionWrapperInner>
		</SectionWrapperOuter>
	);
}

const Wrapper = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 4rem 0;
	@media all and (max-width: 768px) {
		max-width: 380px;
		margin: 2rem 0;
	}
`;

const Title = styled.h3`
	margin: 0 0.25rem 0.5rem 0;
	text-align: right;
	color: var(--font-color-default);
	font-family: var(--font-family-eng-card-title);
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1.5rem;
	letter-spacing: -0.5px;
	@media all and (max-width: 768px) {
		font-size: 1.25rem;
		letter-spacing: -1.25px;
	}
`;

export default AboutMe;
