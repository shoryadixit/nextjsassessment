import Banner from '@/components/banner';
import PageWrapper from '@/layout';
import React from 'react';
import Content1 from '/public/assets/Content1.webp';
import Content2 from '/public/assets/Content2.webp';
import Image from 'next/image';
import { GoDotFill, GoDot } from 'react-icons/go';
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import Star from '/public/assets/star.svg';
import NewsLetterPicture from '/public/assets/NewLetterPicture.webp';
import CardImage from '/public/assets/CardImage.webp';

export default function Home() {
  return (
    <PageWrapper>
      <Banner />
      {/* Content Seciton */}
      <div className='z-[1] flex-col flex w-full items-center justify-center'>
        {/* Before After Section */}
        <div className='flex flex-col sm:flex-row relative gap-14 sm:gap-4 items-center justify-between w-full lg:max-w-[900px] px-10 sm:px-14 lg:px-0 py-20'>
          {/* Before */}
          <div className='flex flex-col gap-4'>
            <h4
              className='px-1 text-[20px] font-[700] bg-rose-300 ring-1'
              style={{ boxShadow: 'rgb(0, 0, 0, 0.2) 0px 1.5px 0px 0px inset' }}
            >
              Before QuillAudits
            </h4>
            <p className='font-poppins text-[18px] sm:text-[16px] font-[300]'>
              Exploits like reentrancy and front-running can let attackers
              withdraw extra funds and manipulate transaction timing for unfair
              gains
            </p>
            <p className='font-poppins text-[18px] sm:text-[16px] font-[300]'>
              {`Vulnerabilities could allow users to mint CDP tokens or pension
              shares indefinitely, disrupting the system's economic balance.`}
            </p>
          </div>

          <div className='w-[3px] hidden sm:flex rounded-sm p-auto mx-14 bg-black bg-opacity-10 h-[270px]' />

          {/* After */}
          <div className='flex flex-col gap-4'>
            <h4
              className='px-1 text-[20px] font-[700] bg-blue-300 ring-1'
              style={{ boxShadow: 'rgb(0, 0, 0, 0.2) 0px 1.5px 0px 0px inset' }}
            >
              After QuillAudits
            </h4>
            <p className='font-poppins text-[18px] sm:text-[16px] font-[300]'>
              Implementation of reentrancy protection mechanisms.
            </p>
            <p className='font-poppins text-[18px] sm:text-[16px] font-[300]'>
              Ensure precision in decimal handling with standard libraries,
              recalculate accurately, fix logic errors, and secure referral
              systems against exploitation.
            </p>
          </div>
        </div>

        <div className='px-10 flex w-full'>
          <div className='flex sm:hidden flex-col gap-3 shadow-md ring-1 ring-[linear-gradient(180deg, #7184FD 0%, #2D83EE 100%)] rounded-[6px] px-6 w-full sm:w-[250px] lg:w-[340px] py-5'>
            <div>
              <h4 className='text-[14px] font-[300] text-gray-500'>
                Headquarters
              </h4>
              <p className='text-[16px] font[500]'>Switzerland</p>
            </div>
            <div>
              <h4 className='text-[14px] font-[300] text-gray-500'>Chain</h4>
              <p className='text-[16px] font[500]'>Pulse Blockchain</p>
            </div>
          </div>
        </div>

        {/* Request Button */}
        <div className='flex flex-col items-center text-center justify-center max-w-[800px] px-10 sm:px-0 w-full gap-4'>
          <h2 className='text-blue-900 font-jost text-[33px] sm:text-[36px] font-[600]'>
            See how QuillAudits is a trusted partner in 1000+ Audit stories
          </h2>

          <div
            className='flex px-5 py-2 rounded-[8px] w-fit whitespace-nowrap'
            style={{
              background:
                'linear-gradient(90.3deg, #4D3DEE -10.68%, #457BF2 47.02%, #5E80F8 103.52%)',
            }}
          >
            <button className='font-jost font-[400] text-[20px] text-white'>
              Request An Audit
            </button>
          </div>
        </div>

        <div className='max-w-[1250px] py-14 px-6 sm:px-20 z-[1] items-start gap-6 relative flex flex-col'>
          <div className='absolute lg:right-0 lg:top-28 right-10 top-20 hidden sm:flex flex-col gap-3 shadow-md ring-1 ring-[linear-gradient(180deg, #7184FD 0%, #2D83EE 100%)] rounded-[6px] px-6 w-[250px] lg:w-[340px] py-5'>
            <div>
              <h4 className='text-[14px] font-[300] text-gray-500'>
                Headquarters
              </h4>
              <p className='text-[16px] font[500]'>Switzerland</p>
            </div>
            <div>
              <h4 className='text-[14px] font-[300] text-gray-500'>Chain</h4>
              <p className='text-[16px] font[500]'>Pulse Blockchain</p>
            </div>
          </div>

          <p className='font-poppins font-[300] text-[18px] w-full sm:w-7/12'>
            Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
            self-managed, inclusive, globally portable fund. Unique for its
            token burn mechanism, it ensures a sustainable 4.32% inflation
            payout. With $143.11k and 41.06% of CDP already burned, it serves 35
            users globally.
          </p>

          <div className='w-full sm:w-7/12 flex flex-col gap-6'>
            <h2 className='z-[1] font-jost font-[700] text-[32px] sm:text-[34px] leading-snug sm:leading-normal'>{`CarpeDiem Pension's Flexible, Blockchain-Enabled Future`}</h2>
            <p className='font-poppins font-[300] text-[18px]'>
              CarpeDiem Pension redefines retirement planning with a unique
              approach that deviates from traditional pension funds. With no
              minimum age for retirement, it offers flexibility and freedom,
              ensuring all genders receive equal treatment. CarpeDiem Pension
              ensures blockchain transparency, anonymity, and global
              accessibility, safeguarding pensions during international
              relocation. Easily transfer pensions to loved ones; share wallet
              access. Re-deposit payouts for increased future benefits.
              Importantly, CarpeDiem Pension prioritizes deposit security by
              avoiding utilizing client funds for internal investments. To
              become a part of this forward-thinking pension scheme, one simply
              needs to install and configure a blockchain wallet.
            </p>
          </div>

          <div className='flex w-full h-full mt-1'>
            <Image src={Content1} alt='content' width={780} height={100} />
          </div>

          <div className='w-full sm:w-7/12 flex flex-col gap-6 mt-2'>
            <h2 className='z-[1] font-jost font-[700] text-[32px] sm:text-[34px] leading-snug sm:leading-normal'>{`CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting`}</h2>
            <p className='font-poppins font-[300] text-[18px]'>
              CarpeDiem Pension confronts critical security challenges,
              including the risks of reentrancy and front-running
              exploits.Malicious actors may exploit contract vulnerabilities,
              withdrawing excess funds or manipulating transaction timing for
              unfair advantages. System faces infinite minting threats, risking
              economic stability with endless creation of CDP tokens or pension
              shares. Addressing these challenges is paramount to safeguarding
              the integrity and security of CarpeDiem Pension.
            </p>
          </div>

          <div className='flex w-full h-full mt-1'>
            <Image src={Content2} alt='content' width={650} height={100} />
          </div>

          <div className='w-full sm:w-7/12 flex flex-col gap-6 mt-2'>
            <h2 className='z-[1] font-jost font-[700] text-[32px] sm:text-[34px] leading-snug sm:leading-normal'>{`CarpeDiem Pension's Journey Through our Audit Process`}</h2>
            <div className='flex flex-col gap-5'>
              <p className='font-[500] text-[24px]'>
                1. Information Gathering:
              </p>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'25px'} />
                <p className='text-[18px] font-[300]'>
                  Collected and reviewed all relevant documentation, including
                  whitepaper, technical specifications, and design documents.
                </p>
              </div>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'25px'} />
                <p className='text-[18px] font-[300]'>
                  {`Obtained a clear understanding of the CDP platform's
                functionality, economic model, and intended user interactions.`}
                </p>
              </div>
              <div className='flex gap-4 font-poppins items-center'>
                <GoDotFill fontSize={'15px'} />
                <p className='text-[18px] font-[300]'>
                  Discussed client concerns and specific areas of focus for the
                  audit.
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <p className='font-[500] text-[24px]'>2. Manual Code Review:</p>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'16px'} />
                <p className='text-[18px] font-[300]'>
                  Conducted a line-by-line review of the smart contract code,
                  focusing on:
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <ul className='flex gap-4 font-poppins pl-6 sm:pl-16'>
                  <GoDot
                    className='font-sans flex w-fit h-fit pt-1'
                    fontSize={'35px'}
                  />
                  <p className='text-[18px] font-[300]'>
                    <span className='font-[400] italic'>
                      Vulnerability identification:
                    </span>{' '}
                    Searching for known vulnerabilities like reentrancy,
                    front-running, integer overflows, and access control issues
                    etc.
                  </p>
                </ul>

                <ul className='flex gap-4 font-poppins pl-6 sm:pl-16'>
                  <GoDot
                    className='font-sans flex w-fit h-fit pt-1'
                    fontSize={'22px'}
                  />
                  <p className='text-[18px] font-[300]'>
                    <span className='font-[400] italic'>Logic flaws:</span>{' '}
                    Identifying inconsistencies or unintended behaviors in the
                    code logic.
                  </p>
                </ul>

                <ul className='flex gap-4 font-poppins pl-6 sm:pl-16'>
                  <GoDot
                    className='font-sans flex w-fit h-fit pt-1'
                    fontSize={'35px'}
                  />
                  <p className='text-[18px] font-[300]'>
                    <span className='font-[400] italic'>
                      Tokenomics correctness:
                    </span>{' '}
                    Verifying if the code accurately implements the intended
                    economic model and token distribution mechanisms.
                  </p>
                </ul>

                <ul className='flex gap-4 font-poppins pl-6 sm:pl-16'>
                  <GoDot
                    className='font-sans flex w-fit h-fit pt-1'
                    fontSize={'35px'}
                  />
                  <p className='text-[18px] font-[300]'>
                    <span className='font-[400] italic'>
                      Solidity best practices:
                    </span>{' '}
                    Solidity best practices: Compliance with secure coding
                    standards and adherence to established guidelines.
                  </p>
                </ul>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <p className='font-[500] text-[24px]'>3. Functional Testing:</p>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'25px'} />
                <p className='text-[18px] font-[300]'>
                  Developed and executed a comprehensive set of test cases
                  covering various user interactions and edge cases.
                </p>
              </div>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'25px'} />
                <p className='text-[18px] font-[300]'>
                  {`Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.`}
                </p>
              </div>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'28px'} className='pt-2' />
                <p className='text-[18px] font-[300]'>
                  Focused on scenarios identified during the manual review and
                  client concerns (e.g., infinite minting, reward calculation
                  errors).
                </p>
              </div>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'23px'} className='pt-2' />
                <p className='text-[18px] font-[300]'>
                  Leveraged tools like Hardhat and Ganache to deploy and test
                  the smart contract locally.
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <p className='font-[500] text-[24px]'>4. Automated Testing:</p>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'22px'} />
                <p className='text-[18px] font-[300]'>
                  Employed static analysis tools like Slither to identify
                  vulnerabilities through automated code scanning.
                </p>
              </div>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'25px'} className='pt-2' />
                <p className='text-[18px] font-[300]'>
                  Utilized symbolic execution tools like Mythril to explore
                  various code execution paths and uncover potential attack
                  vectors.
                </p>
              </div>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'23px'} className='pt-2' />
                <p className='text-[18px] font-[300]'>
                  Integrated unit tests are written by the CDP team to verify
                  specific contract functions and their behaviour.
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <p className='font-[500] text-[24px]'>
                5. Reporting & Remediation:
              </p>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'25px'} />
                <p className='text-[18px] font-[300]'>
                  Prepared a detailed report outlining all identified
                  vulnerabilities, categorized by severity and potential impact.
                </p>
              </div>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'25px'} />
                <p className='text-[18px] font-[300]'>
                  Provided clear recommendations for fixing each vulnerability,
                  including code snippets and best practices.
                </p>
              </div>
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'20px'} className='pt-1' />
                <p className='text-[18px] font-[300]'>
                  Collaborated with the CDP team to prioritize and address the
                  identified issues.
                </p>
              </div>
              <div className='flex gap-4 font-poppins '>
                <GoDotFill fontSize={'20px'} />
                <p className='text-[18px] font-[300]'>
                  Conducted additional verification testing after vulnerability
                  fixes were implemented.
                </p>
              </div>
            </div>
          </div>

          <div className='w-full sm:w-7/12 flex flex-col gap-6 mt-2'>
            <h2 className='z-[1] font-jost font-[700] text-[32px] sm:text-[34px] leading-snug sm:leading-normal'>
              {`QuillAudits' Strategic Approach to CDP Security Audits`}
            </h2>
            <p className='font-poppins font-[300] text-[18px]'>
              We prioritize threat modeling based on platform-specific risks.
              Security-first, we identify and mitigate vulnerabilities beyond
              functionality testing. Using white-box and black-box tests, we
              conduct thorough vulnerability assessments. Maintaining
              transparency, we communicate openly with the CDP team. Emphasizing
              clarity, we present actionable insights for efficient issue
              resolution.
            </p>
          </div>

          <div className='w-full sm:w-7/12 flex flex-col gap-6 mt-2'>
            <h2 className='z-[1] font-jost font-[700] text-[30px] sm:text-[34px] leading-snug sm:leading-normal'>
              Comprehensive Audit Discoveries and Remediation Strategies
            </h2>
            <p className='font-poppins font-[300] text-[18px]'>
              {`Throughout the audit process, we unearthed a total of 33 issues,
              spanning from minor concerns to critical vulnerabilities. Among
              these, some of the critical issues identified were: Here's how we
              remediated them :`}
            </p>
            <div className='font-poppins flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <p className='text-[18px] font-[500]'>
                  1. Unauthorized Claim/Compound:
                </p>
                <div className='flex pl-6 gap-4'>
                  <p className='text-[18px] font-[300]'>a.</p>
                  <p className='text-[18px] font-[300]'>
                    Users could claim/compound a substantial amount without
                    making a deposit or waiting for the stipulated time.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[18px] font-[500]'>
                  2. Precision Loss in mintCDP():
                </p>
                <div className='flex pl-6 gap-4'>
                  <p className='text-[18px] font-[300]'>a.</p>
                  <p className='text-[18px] font-[300]'>
                    Precision loss and unscaled values were identified while
                    calculating rewardPerShare in the mintCDP() function.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[18px] font-[500]'>
                  3. Multiplication Accuracy:
                </p>
                <div className='flex pl-6 gap-4'>
                  <p className='text-[18px] font-[300]'>a.</p>
                  <p className='text-[18px] font-[300]'>
                    Multiplication operations were prone to providing incorrect
                    answers due to unscaled values, posing a potential risk to
                    accurate calculations.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[18px] font-[500]'>
                  4. Incorrect Share Allocation:
                </p>
                <div className='flex pl-6 gap-4'>
                  <p className='text-[18px] font-[300]'>a.</p>
                  <p className='text-[18px] font-[300]'>
                    The protocol was allocating shares for all days, even when
                    there were no corresponding deposits, leading to inefficient
                    use of resources.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[18px] font-[500]'>
                  5. Logic Error in Referral Handling:
                </p>
                <div className='flex pl-6 gap-4'>
                  <p className='text-[18px] font-[300]'>a.</p>
                  <p className='text-[18px] font-[300]'>
                    A logic error resulted in users always having their
                    user.referral set to address(0), which could be exploited to
                    trick the referral system
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[18px] font-[500]'>
                  6. Referral Exploitation:
                </p>
                <div className='flex pl-6 gap-4'>
                  <p className='text-[18px] font-[300]'>a.</p>
                  <p className='text-[18px] font-[300]'>
                    Users could exploit the referral system to extract more CDP
                    from the protocol, undermining its integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full sm:w-7/12 flex flex-col gap-6 mt-2'>
            <h2 className='z-[1] font-jost font-[700] text-[32px] sm:text-[34px] leading-snug sm:leading-normal'>
              Remediation & Impact:
            </h2>
            <p className='font-poppins font-[300] text-[18px]'>
              {`All identified vulnerabilities were addressed by the CDP team,
              significantly enhancing the smart contract's security posture. Key
              improvements include`}
            </p>

            <div className='flex flex-col gap-3'>
              {/* 1 */}
              <div className='flex gap-4 font-poppins items-center'>
                <GoDotFill fontSize={'13px'} />
                <p className='text-[18px] font-[300]'>
                  Implementation of reentrancy protection mechanisms.
                </p>
              </div>
              {/* 2 */}
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'16px'} className='mt-1' />
                <p className='text-[18px] font-[300]'>
                  Accurate handling of decimal values using established
                  libraries or best practices.
                </p>
              </div>
              {/* 3 */}
              <div className='flex gap-4 font-poppins items-center'>
                <GoDotFill fontSize={'13px'} />
                <p className='text-[18px] font-[300]'>
                  Revised calculations with proper scaling factors
                </p>
              </div>
              {/* 4 */}
              <div className='flex gap-4 font-poppins'>
                <GoDotFill fontSize={'13px'} className='mt-1' />
                <p className='text-[18px] font-[300]'>
                  Fixing logic errors to ensure deposits and waiting periods are
                  enforced.
                </p>
              </div>
              {/* 5 */}
              <div className='flex gap-4 font-poppins items-center'>
                <GoDotFill fontSize={'13px'} />
                <p className='text-[18px] font-[300]'>
                  Addressing referral system vulnerabilities to prevent abuse.
                </p>
              </div>
            </div>

            <p className='font-poppins text-[18px] font-[500]' style={{}}>
              Embed this tweet :-{' '}
              <span className='font-[300] text-blue-500'>
                https://x.com/CarpeDiemCDP/ status/1742906560794296402?s=20
              </span>
            </p>

            <p className='text-[18px] font-[300] font-poppins'>
              CDP smart contract audit revealed and fixed critical
              vulnerabilities, safeguarding funds and ensuring platform
              stability. This underscores the need for proactive security in
              blockchain projects, crucial for financial asset management.
              Through audits and issue resolution, CDP reinforces platform
              security, bolstering user trust.
            </p>
          </div>

          <div className='flex w-full sm:w-7/12 relative flex-col h-[380px] lg:h-[420px] shadow-md rounded-t-[4.8px] overflow-hidden'>
            <BiSolidQuoteLeft
              className='absolute top-0 left-0 z-[1] text-[32px] m-3'
              color='#fff'
            />

            <BiSolidQuoteRight className='absolute bottom-0 right-0 text-blue-700 z-[1] text-[32px] m-3' />
            <div
              className='relative w-full h-[160px] flex items-end'
              style={{
                background:
                  'linear-gradient(90.3deg, #2B4D93 -10.68%, #0E205B 27.98%, #162867 55.94%, #323A87 103.52%)',
              }}
            >
              <div className='font-jost pl-[52%] sm:pl-10 lg:pl-16 pb-6 text-white'>
                <p className='hidden sm:block font-[500] text-[24px] lg:text-[28px]'>
                  Sally Radley
                </p>
                <p className='block sm:hidden font-[500] text-[30px] lg:text-[28px]'>
                  Carpediem
                </p>
                <p className='hidden sm:block text-[16px] lg:text-[19px] font-[300]'>
                  WebGFi - CEO
                </p>
                <p className='block sm:hidden text-[20px] font-[300]'>
                  TEAM
                </p>
              </div>
              <div className='bg-blue-700 w-[150px] h-[150px] overflow-hidden lg:w-[180px] lg:h-[180px] rounded-[9.6px] absolute left-4 sm:left-auto -bottom-10 sm:right-5 sm:-bottom-8 lg:right-20 lg:-bottom-12'>
                <Image
                  src={CardImage}
                  alt='Card Image'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
            <div className='flex gap-2 justify-end sm:justify-start px-8 sm:px-10 lg:px-14 py-3 lg:py-5'>
              {[...Array(5)].map((_, index) => (
                <Image
                  src={Star}
                  key={index}
                  alt='star'
                  width={20}
                  height={20}
                  className='object-cover'
                />
              ))}
            </div>

            <div className='font-jost px-5 sm:px-10 lg:px-14 py-4 lg:py-5 font-[300] text-[16px] lg:w-[85%]'>
              “It felt like the auditing team was available within a short
              timeframe, which was excellent. The auditing process looked
              thorough, and I really appreciate the fact that you took time to
              investigate GAS optimizations.”
            </div>
          </div>
        </div>

        {/* NewsLetter */}
        <div
          className='flex w-full justify-center'
          style={{
            background:
              'linear-gradient(89.44deg, #EDF2FE -2.02%, rgba(217, 217, 217, 0) 103.68%)',
          }}
        >
          <div className='max-w-[1250px] sm:w-full py-6 px-6 sm:px-20 gap-2 lg:gap-4 flex flex-col sm:flex-row justify-between items-center'>
            <div className='flex w-full sm:w-2/3 lg:w-2/3 gap-5 flex-col'>
              <h2 className='font-sans text-[18px] lg:text-[22px] font-[700] text-blue-500'>
                NEWSLETTER
              </h2>
              <p className='font-jost text-[32px] lg:text-[48px] leading-snug lg:leading-normal font-[500] text-blue-900'>
                Security First News Letter by QuillAudits
              </p>
              <p className='font-sans font-[300] text-[14px] lg:text-[16px]'>
                Subscribe for the most Exclusive Weekly security based
                newsletter and covering all the recent hacks up to date.
              </p>
            </div>

            <div className='flex w-full sm:w-5/6 h-fit py-12 items-center flex-col'>
              <Image
                src={NewsLetterPicture}
                alt='News Letter Image'
                className='object-contain'
              />
              <div className='relative flex items-center w-full px-4 lg:px-10 font-jost font-[300]'>
                <input
                  type='text'
                  className='w-full h-[50px] lg:h-[60px] px-3 shadow-xl rounded-[6px]'
                  placeholder='vitalik@ethereum.org'
                />
                <div className='absolute right-6 lg:right-12 flex bg-gradient-to-br from-blue-500 via-blue-600 px-6 lg:px-7 py-2 rounded-[8px] to-purple-700 w-fit whitespace-nowrap'>
                  <button className='font-jost font-[400] text-[16px] lg:text-[20px] text-white'>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
