import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Users, Search, TrendingUp } from 'lucide-react';
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface Student {
  firstName: string;
  lastName: string;
}

interface SearchResult {
  referral: string;
  count: number;
  students: Student[];
}

const ReferralSearch: React.FC = () => {
  const [referralCode, setReferralCode] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!referralCode.trim()) {
      setError('Please enter a referral code');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/referral/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          referral: referralCode,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const result: SearchResult = {
        referral: referralCode,
        count: data.count,
        students: data.students,
      };
      setSearchResults(prev => [result, ...prev]);
      setReferralCode('');
    } catch (err) {
      setError('Failed to search referral code. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2 pt-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Referral Analytics
          </h1>
          <p className="text-slate-600">
            Track registrations using referral codes
          </p>
        </div>

        {/* Search Section */}
        <Card className="shadow-md border-0 bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Search className="h-5 w-5 text-blue-600" />
              Search Referral Code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder="Enter referral code "
                value={referralCode}
                onChange={e => setReferralCode(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="text-lg h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button
                onClick={handleSearch}
                disabled={isLoading || !referralCode.trim()}
                className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  'Analyze'
                )}
              </Button>
            </div>
            {error && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Section */}
        {searchResults.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">
                Recent Searches
              </h2>
            </div>

            <div className="grid gap-6">
              {searchResults.map((result, index) => (
                <Card
                  key={index}
                  className="shadow-md border-0 bg-white overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Referral info bar */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                      <div className="flex items-center justify-between">
                        {/* Referral Code */}
                        <div>
                          <p className="text-blue-100 text-sm font-medium uppercase tracking-wide mb-1">
                            Referral Code
                          </p>
                          <p className="text-2xl font-bold">
                            {result.referral}
                          </p>
                        </div>

                        {/* Registration Count */}
                        <div className="text-right">
                          <p className="text-blue-100 text-sm font-medium uppercase tracking-wide mb-1">
                            Total Registrations
                          </p>
                          <div className="flex items-center gap-2">
                            <Users className="h-6 w-6" />
                            <span className="text-4xl font-bold">
                              {result.count}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {searchResults.length === 0 && !isLoading && (
          <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-2xl shadow-inner">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Ready to Analyze
            </h3>
            <p className="text-slate-600">
              Enter a referral code above to see registration statistics
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferralSearch;
