import React, { useEffect, useContext } from 'react';
import GlobalStore from '../contexts/GlobalStore';
import MI from '../assets/images/mumbai.jpg';
import DC from '../assets/images/delhi.jpg';
import CSK from '../assets/images/csk.jpg';
import SRH from '../assets/images/srh.jpg';
import KKR from '../assets/images/kkr.jpg';
import PBKS from '../assets/images/mumbai.jpg';
import RCB from '../assets/images/rcb.jpg';
import RR from '../assets/images/rajas.jpg';
import LSG from '../assets/images/lsg.png';
import GT from '../assets/images/gujrat.png';

export default function Home() {
  const { matchData, fetchMatchData, filterStatus} = useContext(GlobalStore);

 const filteredMatches = filterStatus
  ? matchData.filter((match) => match.status === filterStatus)
  : matchData;


  useEffect(() => {
    fetchMatchData();
  }, [fetchMatchData]);

  const teamLogos = {
    MI: MI,
    CSK:CSK,
    SRH:SRH,
    DC:DC,
    PBKS:PBKS,
    GT:GT,
    LSG:LSG,
    KKR:KKR,
    RR:RR,
    RCB:RCB
  };

  // Helper function to get team logo or fallback
  const getTeamLogo = (teamName) => {
    return teamLogos[teamName] || '/logos/default.png';
  };

  // Function to determine status styling
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Live':
        return 'text-red-600 font-semibold flex items-center';
      case 'Upcoming':
        return 'text-blue-600 font-semibold';
      case 'Completed':
        return 'text-green-600 font-semibold';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 py-6 px-4 md:py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-8 md:mb-12 text-center">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200 mb-4">
              IPL Live Score
            </h1>
          </div>
          <p className="text-indigo-200 text-lg md:text-xl font-medium mb-2">
            Stay updated with the latest IPL match scores
          </p>
          <p className="text-indigo-300 text-sm">
            Powered by CBS | Real-time Updates
          </p>
          
          {/* Decorative Border */}
          <div className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"></div>
        </header>

        {/* Match Cards Container */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {matchData.length === 0 ? (
            <div className="col-span-full py-20">
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 border-t-4 border-b-4 border-indigo-400 rounded-full animate-spin"></div>
                  <div className="absolute top-2 left-2 w-16 h-16 border-t-4 border-b-4 border-purple-400 rounded-full animate-spin animate-reverse"></div>
                </div>
                <p className="mt-6 text-indigo-200 font-semibold text-lg">Loading matches...</p>
                <p className="mt-2 text-indigo-300 text-sm">Fetching latest scores</p>
              </div>
            </div>
          ) : (
            filteredMatches.map((match) => (
              <div
                key={match.matchId}
                className="bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col"
              >
                {/* Match Header */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 px-4 py-3 border-b border-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <div className="relative">
                    <div className="text-base font-bold text-white mb-1">
                      {match.team1} vs {match.team2}
                    </div>
                    {match.venue && (
                      <div className="text-xs text-indigo-100 flex items-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                        {match.venue}
                      </div>
                    )}
                  </div>
                </div>

                {/* Match Content */}
                <div className="p-4 flex-grow bg-gradient-to-b from-gray-50 to-white">
                  {/* Team 1 */}
                  <div className="flex items-center justify-between mb-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 shadow-sm">
                    <div className="flex items-center">
                      <div className="w-8 h-8 mr-3 flex-shrink-0 rounded-full overflow-hidden border-2 border-indigo-300 shadow-md">
                        <img
                          src={getTeamLogo(match.team1)}
                          alt={`${match.team1} logo`}
                          className="w-full h-full object-contain bg-white"
                        />
                      </div>
                      <span className="font-semibold text-gray-800 text-base">{match.team1}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-900 font-bold text-base">
                        {match.score1 || 'Yet to Bat'}
                      </span>
                      {match.overs1 && (
                        <div className="text-gray-600 text-xs">
                          ({match.overs1} ov)
                        </div>
                      )}
                    </div>
                  </div>

                  {/* VS Divider */}
                  <div className="flex items-center justify-center my-3">
                    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <span className="px-3 text-gray-500 font-bold text-xs bg-white border border-gray-200 rounded-full shadow-sm">VS</span>
                    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  </div>

                  {/* Team 2 */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 shadow-sm">
                    <div className="flex items-center">
                      <div className="w-8 h-8 mr-3 flex-shrink-0 rounded-full overflow-hidden border-2 border-indigo-300 shadow-md">
                        <img
                          src={getTeamLogo(match.team2)}
                          alt={`${match.team2} logo`}
                          className="w-full h-full object-contain bg-white"
                        />
                      </div>
                      <span className="font-semibold text-gray-800 text-base">{match.team2}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-900 font-bold text-base">
                        {match.score2 || 'Yet to Bat'}
                      </span>
                      {match.overs2 && (
                        <div className="text-gray-600 text-xs">
                          ({match.overs2} ov)
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Status */}
                <div className="px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-50 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center justify-between w-full">
                    <div className={getStatusStyles(match.status)}>
                      {match.status === 'Live' && (
                        <span className="relative flex h-3 w-3 mr-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-lg"></span>
                        </span>
                      )}
                      <span className="font-bold text-lg">
                        {match.status}
                      </span>
                    </div>
                    {match.result && (
                      <div className="text-sm text-gray-600 font-medium bg-gray-200 px-3 py-1 rounded-full shadow-sm">
                        {match.result}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
  
          <div className="mt-12 text-center">          
            {/* Additional CTA Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button className="bg-white/10 hover:bg-white/20 text-indigo-200 hover:text-white font-semibold py-2 px-6 rounded-xl border border-indigo-400 transition-all duration-300 backdrop-blur-sm">
                Points Table
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-indigo-200 hover:text-white font-semibold py-2 px-6 rounded-xl border border-indigo-400 transition-all duration-300 backdrop-blur-sm">
                Schedule
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-indigo-200 hover:text-white font-semibold py-2 px-6 rounded-xl border border-indigo-400 transition-all duration-300 backdrop-blur-sm">
                Player Stats
              </button>
            </div>
          </div>
        

        {/* Decorative Bottom Border */}
        <div className="mt-12 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full mx-auto max-w-xs"></div>
      </div>
    </div>
  );
}